import {h, Component} from 'composi'
import {title} from './components/title'
import Clicker from './components/clicker';

// Set state on component.
// Will cause component to render.
title.setState('Clicker')

new Clicker({
  container: 'section',
  count: 0
})
