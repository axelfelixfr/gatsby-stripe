import React from 'react';
import { Provider } from "react-redux";
import createStore from './state/store';
import { ChakraProvider, theme } from "@chakra-ui/react";

export default ({ element }) => {
    const store = createStore();
    return (
        <ChakraProvider theme={theme}>
            <Provider store={store}>{ element }</Provider> 
        </ChakraProvider>
    );
}