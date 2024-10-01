import { zodResolver } from '@hookform/resolvers/zod';
import classNames from 'classnames';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import styles from '../Form.module.scss';
import { Button } from '@/components/ui-components/Button/Button';
import {
  ButtonType,
  Sizes,
  Variant,
} from '@/components/ui-components/Button/constants';
import { Icon } from '@/components/ui-components/Icons';
import Input from '@/components/ui-components/Input/Input';
import Select from '@/components/ui-components/Select/Select';
import { useFormActions } from '@/hooks/useFormActions';
import { useAppDispatch } from '@/redux/hooks';
import { toggleModal } from '@/redux/slices/modalSlice';
import { toggleStatus } from '@/redux/slices/statusSlice';
import { TOPIC_WITH_LANGUAGES } from '@/utils/constants';
import { FeedbackValues, feedbackSchema } from '@/utils/validateSchema';

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
    resolver: zodResolver(feedbackSchema),
    mode: 'onTouched',
  });

  const dispatch = useAppDispatch();
  const { sendFeedback } = useFormActions();

  const onSubmit: SubmitHandler<FeedbackValues> = async (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
    dispatch(toggleStatus('loading'));
    const response = await sendFeedback();
    if (response) {
      dispatch(toggleStatus('idle'));
      dispatch(toggleModal({ openedModalType: 'feedback-success' }));
    }
  };

  const handleClose = () => dispatch(toggleModal({ openedModalType: null }));

  const textareaClName = classNames(styles.textarea, {
    [styles['textarea-error']]: errors.question?.message,
  });
  return (
    <section className={styles['form-container']}>
      <div className={styles['title-container']}>
        <h2>{t('support.title')}</h2>
        <button type="button" className={styles.close} onClick={handleClose}>
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
          buttonType={ButtonType.Submit}
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
