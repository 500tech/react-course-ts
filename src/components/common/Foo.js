import React, { memo } from 'react';

export const Foo = memo(() => console.log('render') || <p>Foo</p>);
