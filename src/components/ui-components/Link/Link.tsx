import classNames from 'classnames';
import { type FC } from 'react';
import { Link } from 'react-router-dom';

import { LINK_TEST_ID } from './constants';
import styles from './Link.module.scss';
import { type LinkProps } from './Link.types';

export const LinkComponent: FC<LinkProps> = ({
  url,
  variant,
  isInNewTab = false,
  text,
}) => {
  const isExternalLink = url.startsWith('http');
  const isMailLink = url.startsWith('mailto:');

  const linkClass = classNames(styles.link, styles[`link--${variant}`]);

  if (isMailLink) {
    return (
      <a className={linkClass} href={url} data-testid={LINK_TEST_ID}>
        {text}
      </a>
    );
  }

  return (
    <>
      {isExternalLink ? (
        <a
          className={linkClass}
          href={url}
          data-testid={LINK_TEST_ID}
          target={isInNewTab ? '_blank' : '_self'}
          rel={isInNewTab ? 'noopener noreferrer' : undefined}
        >
          {text}
        </a>
      ) : (
        <Link
          className={linkClass}
          to={url}
          data-testid={LINK_TEST_ID}
          target={isInNewTab ? '_blank' : '_self'}
        >
          {text}
        </Link>
      )}
    </>
  );
};
