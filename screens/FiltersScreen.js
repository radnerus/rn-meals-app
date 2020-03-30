import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View, Switch, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';
import FilterSwitch from '../components/FilterSwitch';
import { useDispatch } from 'react-redux';
import { setFilters } from '../store/actions/meals';

const FiltersScreen = props => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const { navigation } = props;
  const dispatch = useDispatch();

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian
    };

    console.log(appliedFilters);

    dispatch(setFilters(appliedFilters));
  }, [dispatch, isGlutenFree, isVegan, isLactoseFree, isVegetarian]);

  useEffect(() => {
    navigation.setParams({
      save: saveFilters
    });
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restriction</Text>
      <FilterSwitch
        onChange={setIsGlutenFree}
        value={isGlutenFree}
        label="Gluten-free"
      />
      <FilterSwitch
        onChange={setIsLactoseFree}
        value={isLactoseFree}
        label="Lactose-free"
      />
      <FilterSwitch onChange={setIsVegan} value={isVegan} label="Vegan" />
      <FilterSwitch
        onChange={setIsVegetarian}
        value={isVegetarian}
        label="Vegetarian"
      />
    </View>
  );
};

FiltersScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Filter Meals',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="ios-save"
          onPress={navData.navigation.getParam('save')}
        />
      </HeaderButtons>
    )
  };
};

export default FiltersScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    margin: 20,
    textAlign: 'center'
  }
});
