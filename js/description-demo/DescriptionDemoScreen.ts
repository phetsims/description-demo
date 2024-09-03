// Copyright 2024, University of Colorado Boulder

/**
 * @author Jesse Greenberg (PhET Interactive Simulations)
 */

import Screen, { ScreenOptions } from '../../../joist/js/Screen.js';
import optionize from '../../../phet-core/js/optionize.js';
import DescriptionDemoColors from '../common/DescriptionDemoColors.js';
import descriptionDemo from '../descriptionDemo.js';
import DescriptionDemoModel from './model/DescriptionDemoModel.js';
import DescriptionDemoScreenView from './view/DescriptionDemoScreenView.js';
import DescriptionDemoStrings from '../DescriptionDemoStrings.js';

type SelfOptions = {
  // Add properties here
};

type DescriptionDemoScreenOptions = SelfOptions & ScreenOptions;

export default class DescriptionDemoScreen extends Screen<DescriptionDemoModel, DescriptionDemoScreenView> {

  public constructor( providedOptions: DescriptionDemoScreenOptions ) {

    const options = optionize<DescriptionDemoScreenOptions, SelfOptions, ScreenOptions>()( {
      name: DescriptionDemoStrings.screen.nameStringProperty,

      backgroundColorProperty: DescriptionDemoColors.screenBackgroundColorProperty
    }, providedOptions );

    super(
      () => new DescriptionDemoModel( { tandem: options.tandem.createTandem( 'model' ) } ),
      model => new DescriptionDemoScreenView( model, { tandem: options.tandem.createTandem( 'view' ) } ),
      options
    );
  }
}

descriptionDemo.register( 'DescriptionDemoScreen', DescriptionDemoScreen );