import {
    Provider, defaultTheme, Grid, View, Heading, Flex, ProgressCircle,
    TableView,
    TableBody,
    TableHeader,
    Column,
    Row,
    Cell,
} from '@adobe/react-spectrum';
import Edit from '@spectrum-icons/workflow/Edit';
import React, { useState, useEffect } from 'react';
import actions from '../config.json';

function HomeService() {
    let [count, setCount] = React.useState(0);
    const [totalLoggedIn, setTotalLoggedIn] = useState([]);
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getOrder = async () => {
        const res = await fetch(actions['getOrder'], {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'x-gw-ims-org-id': ims.org,
                // authorization: `Bearer ${ims.token}`
            }
        });
        return await res.json();
    }

    useEffect(() => {
        (async () => {
            const orders = await getOrder();

            if (orders.orders.value) {
                setOrders(orders.orders.value);
            }
            setIsLoading(false);
        })();
    }, []);

    return (
        <Provider theme={defaultTheme}>
            <View width={'size-7000'} marginTop={30}>
                <View gridArea='content' padding='size-200' marginTop={100}>
                    {isLoading ? (
                        <Flex alignItems="center" justifyContent="center" height="100vh">
                            <ProgressCircle size="L" aria-label="Loading…" isIndeterminate />
                        </Flex>
                    ) : (
                        <>
                            <Heading level={3} padding='size-200'>Latest order info</Heading>
                            <TableView aria-label="Example table" selectionMode="none">
                                <TableHeader>
                                    <Column key="order_id">Order Id</Column>
                                    <Column key="customer_email">Customer Email</Column>
                                    <Column key="subtotal">Sub Total</Column>
                                </TableHeader>
                                <TableBody>
                                    <Row>
                                        <Cell>{orders.increment_id}</Cell>
                                        <Cell>{orders.customer_email}</Cell>
                                        <Cell>{orders.subtotal}</Cell>
                                    </Row>
                                </TableBody>
                            </TableView>
                        </>
                    )}
                </View>
            </View>
        </Provider>
    );
}

export default HomeService;