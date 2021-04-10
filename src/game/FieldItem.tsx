import React from 'react';

interface Props {
    size: number;
    item: string | null;
    index: number;
}

interface State {
    cellNumber: number;
    left: FieldItem | null;
    top: FieldItem | null;
    right: FieldItem | null;
    bottom: FieldItem | null;
}

export default class FieldItem extends React.Component<Props> {
    state: State = {
        cellNumber: 0,
        left: null,
        top: null,
        right: null,
        bottom: null,
    };
}
