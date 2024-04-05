import { Text, ActionButton, View, LogicButton, ButtonGroup, Button, Provider, defaultTheme } from '@adobe/react-spectrum';
import Edit from '@spectrum-icons/workflow/Edit';
function ButtonService() {
    let [count, setCount] = React.useState(0);

    return (
        <Provider theme={defaultTheme}>
            <View width={'size-1000'} marginBottom={30}>
                <ActionButton>
                    <Edit />
                    <Text>Icon + Label</Text>
                </ActionButton>
            </View>
            <View width={'size-1250'} marginBottom={30}>
                <ActionButton onPress={() => setCount((c) => c + 1)}>
                    {count} Edits
                </ActionButton>
            </View>
            <View width={'size-2000'}>
                <LogicButton variant="and" marginEnd={30}>And</LogicButton>
                <LogicButton variant="or">Or</LogicButton>
            </View >
            <View width={'size-2400'} marginTop={30}>
                <ButtonGroup orientation="vertical">
                    <Button variant="secondary">No, thanks</Button>
                    <Button variant="secondary">Remind me later</Button>
                    <Button variant="primary">Rate Now</Button>
                </ButtonGroup>
            </View>
        </Provider>
    );
}

export default ButtonService;