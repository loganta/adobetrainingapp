/* 
* <license header>
*/

import React from 'react'
import { ToastContainer, ToastQueue } from '@react-spectrum/toast'
import { Heading, View, Content, Button, ButtonGroup, StatusLight, ProgressCircle, Meter, Badge, Flex, Switch } from '@adobe/react-spectrum'
import AddBreadcrumbs from '../../helper/Breadcrumbs'
let pathsObBreadcrumbs = [
    { id: 1, label: 'App Builder' },
    { id: 2, label: 'React Spectrum' },
    { id: 3, label: 'Other Tools' }
];

export const OTHERTOOLS = () => {
    let [selected, setSelection] = React.useState(false);

    return (
        <View width="size-6000">
            {AddBreadcrumbs(pathsObBreadcrumbs)}
            <Heading level={1}>Learning Table</Heading>
            <ToastContainer />
            <Content>
                <View width={'size-6000'}>
                    <ButtonGroup>
                        <Button
                            onPress={() => ToastQueue.neutral('Toast available')}
                            variant="secondary">
                            Show Neutral Toast
                        </Button>
                        <Button
                            onPress={() => ToastQueue.positive('Toast is done!')}
                            variant="primary">
                            Show Positive Toast
                        </Button>
                        <Button
                            onPress={() => ToastQueue.negative('Toast is burned!')}
                            variant="negative">
                            Show Negative Toast
                        </Button>
                        <Button
                            onPress={() => ToastQueue.info('Toasting…')}
                            variant="accent"
                            style="outline">
                            Show Info Toast
                        </Button>
                    </ButtonGroup>
                </View>
                <View width={'size-6000'} marginTop={30}>
                    <StatusLight variant="neutral">
                        Gray: Archived, Deleted, Paused, Draft, Not Started, Ended
                    </StatusLight>
                    <StatusLight variant="positive">
                        Green: Approved, Complete, Success, New, Purchased, Licensed
                    </StatusLight>
                    <StatusLight variant="notice">
                        Orange: Needs Approval, Pending, Scheduled, Syncing, Indexing, Processing
                    </StatusLight>
                    <StatusLight variant="negative">
                        Red: Error, Alert, Rejected, Failed
                    </StatusLight>
                    <StatusLight variant="info">
                        Blue: Active, In Use, Live, Published
                    </StatusLight>
                </View>
                <View width={'size-6000'} marginTop={30}>
                    <ProgressCircle
                        aria-label="Loading…"
                        minValue={50}
                        maxValue={150}
                        value={100}
                    />
                </View>
                <View width={'size-6000'} marginTop={30}>
                    <Flex direction="column" maxWidth="size-3000" gap="size-300">
                        <Meter label="Label" value={25} variant="warning" />
                        <Meter label="Label" labelPosition="side" value={25} variant="warning" />
                        <Meter label="Label" showValueLabel={false} value={25} variant="warning" />
                    </Flex>
                </View>
                <View width={'size-6000'} marginTop={30}>
                    <Flex direction="column" gap={8}>
                        <Badge variant="seafoam">Seafoam</Badge>
                        <Badge variant="indigo">Indigo</Badge>
                        <Badge variant="purple">Purple</Badge>
                        <Badge variant="fuchsia">Fuchsia</Badge>
                        <Badge variant="magenta">Magenta</Badge>
                        <Badge variant="yellow">Yellow</Badge>
                    </Flex>
                </View>
                <View width={'size-6000'} marginTop={30}>
                    <Switch name="power" value="low">Low power mode</Switch>
                    <Switch onChange={setSelection}>
                        Switch Label
                    </Switch>
                    <div>The Switch is on: {selected.toString()}</div>
                </View>
            </Content>
        </View>
    )
}
