import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

interface DepartArrive {
  scheduled_date: string,
  scheduled_time: string,
  gate: string,
  gate_full: string,
  terminal: string,
  terminal_full: string,
  location_name: string,
  location_short_name: string,
  location_time_zone: string,
  GMT: string,
  time_color: string
}

interface FlightProps {
  data: {
    snippet: {
      extra: {
        flight_name: string,
        flight_status: string,
        airline_hot_line: string,
        last_updated_ago: number,
        plane_icon: string,
        plane_position: number,
        status: string,
        status_color: string,
        status_detail: string,
        depart_arrive: DepartArrive[]
      }
    }
  };
}

const styles = StyleSheet.create({

})

export class Flight extends React.PureComponent <
  FlightProps
>{


  public render() {
    const data  = this.props.data.snippet.extra;
    const departure = data.depart_arrive[0];
    const arrival = data.depart_arrive[1];
    return (
      <View data-status={data.flight_status}>
       <Text>{data.flight_name}</Text>
       <Text>{data.status}</Text>
       <Text>{data.status_detail}</Text>

       <Text>{departure.location_short_name}</Text>
       <Image
          style={{ width: 50, height: 50 }}
          source={{ uri: data.plane_icon }}
        />
       <Text>{arrival.location_short_name}</Text>

       <Text>{departure.location_name}</Text>
       <Text>{departure.scheduled_date}</Text>
       <Text>{departure.scheduled_time}</Text>

       <Text>Terminal</Text>
       <Text>{departure.terminal}</Text>

       <Text>Gate</Text>
       <Text>{departure.gate}</Text>

       <Text>{arrival.location_name}</Text>
       <Text>{arrival.scheduled_date}</Text>
       <Text>{arrival.scheduled_time}</Text>

       <Text>Terminal</Text>
       <Text>{arrival.terminal}</Text>

       <Text>Gate</Text>
       <Text>{arrival.gate}</Text>

       <Text>Source: <a href="#">flightstats.com</a></Text>
      </View>
  )}
}
