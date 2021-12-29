import React, { useContext } from "react";
import { View, Text, Button, Switch } from "react-native";
import { useTheme } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import "../../language/i18n";
import { useTranslation } from "react-i18next";

import { ThemeContext } from "../../context/ThemeContext/ThemeProvider";
import styles from "./SettingsComponent.styles";
import { DARK, LIGHT } from "../../context/ThemeContext/types";

export default function SettingsComponent() {
  const { dispatch } = useContext(ThemeContext);
  const { colors } = useTheme();
  const { t, i18n } = useTranslation();
  async function darkTheme() {
    await AsyncStorage.setItem("theme", "dark");
    dispatch({ type: DARK });
  }
  async function lightTheme() {
    await AsyncStorage.setItem("theme", "light");
    dispatch({ type: LIGHT });
  }

  function changeLanguage() {
    i18n.changeLanguage(i18n.language === "en" ? "tr" : "en");
  }
  return (
    <View style={styles.container}>
      <View>
        <Text style={{ color: colors.text }}>{t("Change Theme")}</Text>
      </View>
      <View>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          ios_backgroundColor="#3e3e3e"
        />
      </View>
      <Button onPress={darkTheme} title="dark" />
      <Button onPress={lightTheme} title="light" />
      <Button onPress={changeLanguage} title={t("Change Language")} />
    </View>
  );
}

//i18next.changeLanguage("en-US-xx");
