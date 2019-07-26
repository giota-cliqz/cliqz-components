import { storiesOf } from '@storybook/react';
import React from 'react';
import { Flight } from '../src/index';
import { flightScheduled } from './scheduled';

storiesOf('FlightSnippet', module).add('scheduled', () => (
  <Flight data={flightScheduled}/>
));

storiesOf('FlightSnippet', module).add('delayed', () => (
  <Flight data={flightScheduled}/>
));

storiesOf('FlightSnippet', module).add('delayed_on_ground', () => (
  <Flight data={flightScheduled}/>
));

storiesOf('FlightSnippet', module).add('delayed_no_updates', () => (
  <Flight data={flightScheduled}/>
));

storiesOf('FlightSnippet', module).add('delayed_early_departure', () => (
  <Flight data={flightScheduled}/>
));