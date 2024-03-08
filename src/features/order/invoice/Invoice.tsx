import {
  Document,
  Font,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import { FC, ReactElement } from "react";

const styles = StyleSheet.create({
  page: {
    fontSize: 11,
    paddingTop: 20,
    paddingLeft: 40,
    paddingRight: 40,
    lineHeight: 1.5,
    flexDirection: "column",
  },
  container: {
    flexDirection: "row",
    borderBottomWidth: 2,
    borderBottomColor: "#112131",
    borderBottomStyle: "solid",
    alignItems: "stretch",
  },
  spaceBetween: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    color: "#3E3E3E",
  },
  reportTitle: { fontSize: 18, textAlign: "center", fontWeight: "bold" },
  tbody: {
    fontSize: 9,
    paddingTop: 4,
    textAlign: "center",
    flex: 1,
    borderColor: "whitesmoke",
    borderBottomWidth: 1,
  },
  tbody2: { flex: 2, textAlign: "left" },
});

Font.register({
  family: "Lato Bold",
  src: "https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh6UVSwiPHA.ttf",
});

const Invoice: FC = ({ user, order }): ReactElement => {
  const image = order?.image;
  console.log("order", order);
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View
          style={{ width: "100%", flexDirection: "col", columnGap: "2rem" }}
        >
          <View>{user.firstName}</View>
          <View>
            <Text>{user.lastName}</Text>
          </View>
          <View>
            <Text>{user.address}</Text>
          </View>
          <View>
            <Text>{user.email}</Text>
          </View>
          <View>
            <Text>{user.phone}</Text>
          </View>
          <View>
            <Text>{user.text}</Text>
          </View>
          <View>
            <Text>count: {order.count}</Text>
          </View>
          <View>
            <Text>{order.name}</Text>
          </View>
          <View>
            <Text>{order.userId}</Text>
          </View>
          <View>
            <Text>{order.price}</Text>
          </View>
        </View>
        {/* <Image src={image} /> */}
      </Page>
    </Document>
  );
};

export default Invoice;
