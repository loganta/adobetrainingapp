/* 
* <license header>
*/

import React from 'react'
import { Heading, View, Content, Link } from '@adobe/react-spectrum'
import AddBreadcrumbs from '../../helper/Breadcrumbs'
import ButtonService from '../../services/ButtonService'
let pathsObBreadcrumbs = [
    { id: 1, label: 'App Builder' },
    { id: 2, label: 'React Spectrum' },
    { id: 3, label: 'Buttons' }
];
export const Buttons = () => (
    <View width="size-6000">
        {AddBreadcrumbs(pathsObBreadcrumbs)}
        <Heading level={1}>Learning Buttons</Heading>
        <Content>
            <ButtonService></ButtonService>
        </Content>
    </View>
)
