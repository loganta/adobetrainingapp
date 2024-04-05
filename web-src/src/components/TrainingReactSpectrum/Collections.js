/* 
* <license header>
*/

import React from 'react'
import { Heading, View, Content, Link, defaultTheme, Provider, Flex, ActionMenu, Item, Section, Keyboard, Text } from '@adobe/react-spectrum'
import AddBreadcrumbs from '../../helper/Breadcrumbs'
import Cut from '@spectrum-icons/workflow/Cut';
import Copy from '@spectrum-icons/workflow/Copy';
import Paste from '@spectrum-icons/workflow/Paste';
let pathsObBreadcrumbs = [
    { id: 1, label: 'App Builder' },
    { id: 2, label: 'React Spectrum' },
    { id: 3, label: 'Collections' }
];
let openWindows = [
    {
        name: 'Reversion',
        id: 'reversion',
        children: [
            { id: 'undo', name: 'Undo' },
            { id: 'redo', name: 'Redo' }
        ]
    },
    {
        name: 'Clipboard',
        id: 'clipboard',
        children: [
            { id: 'cut', name: 'Cut' },
            { id: 'copy', name: 'Copy' },
            { id: 'paste', name: 'Paste' }
        ]
    }
];

export const Collections = () => (
    <Provider theme={defaultTheme}>
        {AddBreadcrumbs(pathsObBreadcrumbs)}
        <Heading level={1}>Learning Collections</Heading>
        <Content>
            <View width={'size-3400'}>
                <Flex gap="size-100">
                    <ActionMenu align="start">
                        <Item key="cut">Cut</Item>
                        <Item key="copy">Copy</Item>
                        <Item key="paste">Paste</Item>
                    </ActionMenu>
                    <ActionMenu align="end" direction="top" shouldFlip={false}>
                        <Item key="cut">Cut</Item>
                        <Item key="copy">Copy</Item>
                        <Item key="paste">Paste</Item>
                    </ActionMenu>
                    <ActionMenu direction="start" align="start">
                        <Item key="cut">Cut</Item>
                        <Item key="copy">Copy</Item>
                        <Item key="paste">Paste</Item>
                    </ActionMenu>
                    <ActionMenu direction="end" align="end">
                        <Item key="cut">Cut</Item>
                        <Item key="copy">Copy</Item>
                        <Item key="paste">Paste</Item>
                    </ActionMenu>
                </Flex>
            </View>
            <View width={'size-3000'} marginTop={30}>
                <ActionMenu
                    items={openWindows}>
                    {item => (
                        <Section items={item.children} title={item.name}>
                            {item => <Item>{item.name}</Item>}
                        </Section>
                    )}
                </ActionMenu>
            </View>
            <View width={'size-3000'} marginTop={30}>
                <ActionMenu>
                    <Item key="cut" textValue="cut">
                        <Cut />
                        <Text>Cut</Text>
                        <Keyboard>⌘X</Keyboard>
                    </Item>
                    <Item key="copy" textValue="copy">
                        <Copy />
                        <Text>Copy</Text>
                        <Keyboard>⌘C</Keyboard>
                    </Item>
                    <Item key="paste" textValue="paste">
                        <Paste />
                        <Text>Paste</Text>
                        <Keyboard>⌘V</Keyboard>
                    </Item>
                </ActionMenu>
            </View>
        </Content>
    </Provider>
)
