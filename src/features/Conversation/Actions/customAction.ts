import { ActionIconGroupItems } from '@lobehub/ui/es/ActionIconGroup';
import { css, cx } from 'antd-style';
import { Camera, LanguagesIcon, Play, Speaker } from 'lucide-react';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { localeOptions } from '@/locales/resources';

const translateStyle = css`
  .ant-dropdown-menu-sub {
    overflow-y: scroll;
    max-height: 400px;
  }
`;

export const useCustomActions = () => {
  const { t } = useTranslation('chat');

  const translate = {
    children: localeOptions.map((i) => ({
      key: i.value,
      label: t(`lang.${i.value}`, { ns: 'common' }),
    })),
    icon: LanguagesIcon,
    key: 'translate',
    label: t('translate.action'),
    popupClassName: cx(translateStyle),
  } as ActionIconGroupItems;

  const tts = {
    icon: Play,
    key: 'tts',
    label: t('tts.action'),
  } as ActionIconGroupItems;

  const comfy = {
    icon: Camera,
    key: 'comfy',
    label: 'Comfy',
  } as ActionIconGroupItems;

  const emiguru_voices = {
    icon: Speaker,
    key: 'emiguru_voices',
    label: 'emiguru_voices',
  } as ActionIconGroupItems;

  return useMemo(
    () => ({ emiguru_voices, comfy, translate, tts }),
    [emiguru_voices, comfy, translate, tts],
  );
};
