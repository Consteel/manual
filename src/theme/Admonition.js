import React from 'react';
import Admonition from '@theme-original/Admonition';
import InfoIcon from '@site/static/img/manual_info_icon.svg';
import WarningIcon from '@site/static/img/manual_warning_icon.svg';
import TipIcon from '@site/static/img/manual_tip_icon.svg';
import NoteIcon from '@site/static/img/manual_note_icon.svg';
import DangerIcon from '@site/static/img/manual_danger_icon.svg';


export default function AdmonitionWrapper(props) {

    switch (props.type) {
        case 'info':
            return <Admonition icon={<InfoIcon />} {...props} />;
        case 'tip':
            return <Admonition icon={<TipIcon />} {...props} />;
        case 'warning':
            return <Admonition icon={<WarningIcon />} {...props} />;
        case 'note':
            return <Admonition icon={<NoteIcon />} {...props} />;
        case 'danger':
            return <Admonition icon={<DangerIcon />} {...props} />;
        default:
            break;
    }

  return <Admonition {...props} />;

}