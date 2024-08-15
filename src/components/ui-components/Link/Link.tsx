import classNames from 'classnames';
import type { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './Link.module.scss';
import { LinkProps } from './Link.types';

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
      <a className={linkClass} href={url}>
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
          target={isInNewTab ? '_blank' : '_self'}
          rel={isInNewTab ? 'noopener noreferrer' : undefined}
        >
          {text}
        </a>
      ) : (
        <Link
          className={linkClass}
          to={url}
          target={isInNewTab ? '_blank' : '_self'}
        >
          {text}
        </Link>
      )}
    </>
  );
};
