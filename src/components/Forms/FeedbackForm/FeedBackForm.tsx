import { zodResolver } from '@hookform/resolvers/zod';
import classNames from 'classnames';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { BUTTON_CLOSE_ID } from './constants';
import styles from '../Form.module.scss';
import { Button } from '@/components/ui-components/Button/Button';
import { Sizes, Variant } from '@/components/ui-components/Button/constants';
import { Icon } from '@/components/ui-components/Icons';
import Input from '@/components/ui-components/Input/Input';
import Select from '@/components/ui-components/Select/Select';
import { useAppDispatch } from '@/redux/hooks';
import { useSendFeedbackMutation } from '@/redux/services/feedback';
import { toggleModal } from '@/redux/slices/modalSlice';
import { TOPIC_WITH_LANGUAGES } from '@/utils/constants';
import { FeedbackValues, getFeedbackSchema } from '@/utils/validateSchema';

const FeedBackForm = () => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    control,
    formState: { isValid, errors },
  } = useForm<FeedbackValues>({
    defaultValues: {
      email: '',
      topic: undefined,
      question: '',
    },
    resolver: zodResolver(getFeedbackSchema(t)),
    mode: 'onTouched',
  });

  const dispatch = useAppDispatch();
  const [sendFeedback] = useSendFeedbackMutation();
  const onSubmit: SubmitHandler<FeedbackValues> = async (data) => {
    const { email, topic, question } = data;
    sendFeedback({ email, topic, text: question });
  };

  const handleClose = () => dispatch(toggleModal({ openedModalType: null }));

  const textareaClName = classNames(styles.textarea, {
    [styles['textarea-error']]: errors.question?.message,
  });
  return (
    <section className={styles['form-container']}>
      <div className={styles['title-container']}>
        <h2>{t('support.title')}</h2>
        <button
          type="button"
          className={styles.close}
          onClick={handleClose}
          aria-label="close modal"
          data-testid={BUTTON_CLOSE_ID}
        >
          <Icon.Close />
        </button>
      </div>
      <p className={styles.paragraph}>{t('support.description')}</p>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className={styles['input-container']}>
          <Input
            {...register('email')}
            placeholder={t('support.email')}
            type="email"
            errorMessage={errors.email?.message}
          />
          <Controller
            control={control}
            name="topic"
            render={({ field, fieldState }) => (
              <Select
                placeholder={t('support.select')}
                value={field.value}
                options={Object.values(
                  TOPIC_WITH_LANGUAGES[t('support.select-topic')]
                )}
                onChange={(newValue) => field.onChange(newValue)}
                onBlur={field.onBlur}
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
              />
            )}
          />
          <div className={styles['textarea-container']}>
            <textarea
              {...register('question')}
              className={textareaClName}
              placeholder={t('support.question')}
            />
            {errors.question && (
              <p className={styles.error}>{errors.question?.message}</p>
            )}
          </div>
        </div>
        <Button
          type="submit"
          size={Sizes.Full}
          variant={Variant.Basic}
          text={t('support.btn-send')}
          disabled={!isValid}
        />
      </form>
    </section>
  );
};

export default FeedBackForm;
