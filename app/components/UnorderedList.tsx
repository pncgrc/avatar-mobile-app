import { Text, View } from "react-native";
import { UnorderedListProps } from "../types";




const UnorderedList = ({value, styles, theme, alternateInfo} : UnorderedListProps) => {

    return(
        <View style={{ marginBottom: 8 }}>
            {Array.isArray(value) ? (
            value.map((item, index) => (
                <Text key={index} style={[styles.value, theme.value]}>
                • {capitalize(item)}
                </Text>
            ))
            ) : value === "NA" ? (
            <Text style={[styles.value, theme.value]}>{alternateInfo}</Text>
            ) : (
            <Text style={[styles.value, theme.value]}>{value}</Text>
            )}
        </View>
    );
}
  
const capitalize = (str: string) => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export default UnorderedList;
