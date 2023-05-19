import * as React from 'react';
import { Text, View, useWindowDimensions } from 'react-native';
import { Appbar } from 'react-native-paper';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import OrdenesPagadas from './OrdenesPagadas';
import OrdenesSalidas from './OrdenesSalidas';
import OrdenesCamino from './OrdenesCamino';
import OrdenesEntregado from './OrdenesEntregado';

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#ff4081' }} />
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);

const renderScene = SceneMap({
  pagados:  () => <OrdenesPagadas></OrdenesPagadas>,
  salidas: () =><OrdenesSalidas></OrdenesSalidas>,
  encamino: () =><OrdenesCamino></OrdenesCamino>,
  entregados: () =><OrdenesEntregado></OrdenesEntregado>
});

export default function OrdenesPag({navigation, props}) {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'pagados', title: 'Pagados' },
    { key: 'salidas', title: 'Salidas' },
    { key: 'encamino', title: 'Encamino' },
    { key: 'entregados', title: 'Entregados' },
  ]);

  return (
    <React.Fragment>
    <Appbar.Header>
        <Appbar.BackAction
          onPress={() => {
            navigation.navigate("AdminPag");
          }}
        />
        <Appbar.Content title="Ordenes" />
        </Appbar.Header>
    <TabView
        renderTabBar={props => (
            <TabBar
                indicatorStyle={{backgroundColor: 'red'}}
              {...props}
              renderLabel={({ route, color }) => (
                <Text style={{ color: 'black', margin: 1 ,fontSize:13}}>
                  {route.title}
                </Text>
              )}
              style={{backgroundColor: '#ffa500'}}
            />
          )}
     
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
    </React.Fragment>
  );
}