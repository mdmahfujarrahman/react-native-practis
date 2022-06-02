import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Country from './Country';

export default function Countrys() {
  const [countrys, setCountry] = useState([]);

  useEffect(() => {
      fetch("https://restcountries.com/v3.1/all")
          .then((res) => res.json())
          .then((data) => setCountry(data));
  });

  return (
      <View>
          <Text style={styles.header}>Total Country: {countrys?.length}</Text>
          <ScrollView>
              {countrys.map((country) => (
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
        textAlign: "center"
    },
})