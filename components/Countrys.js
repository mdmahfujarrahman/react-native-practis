import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import Country from './Country';

export default function Countrys() {
    const [countrys, setCountry] = useState([]);
    const [searched, setSearched] = useState([]);

  useEffect(() => {
      fetch("https://restcountries.com/v3.1/all")
          .then((res) => res.json())
          .then((data) => {
              setCountry(data)
              setSearched(data);
            });
  });

  const handleText = text => {
      const filter = countrys.filter(country => country.name.common.includes(text));
      setSearched(filter);
  }

  return (
      <View>
          <Text style={styles.header}>Total Country: {countrys?.length}</Text>
          <TextInput onChangeText={handleText} style={styles.input}></TextInput>
          <ScrollView>
              {searched.map((country) => (
                  <Country country={country} />
              ))}
          </ScrollView>
      </View>
  );
}const styles = StyleSheet.create({
    header: {
        marginTop: 40,
        fontSize: 40,
        color: "red",
        textAlign: "center",
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});