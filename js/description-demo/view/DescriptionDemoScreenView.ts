// Copyright 2024, University of Colorado Boulder

/**
 * TODO Describe this class and its responsibilities.
 *
 * @author Jesse Greenberg (PhET Interactive Simulations)
 */

import ScreenView, { ScreenViewOptions } from '../../../../joist/js/ScreenView.js';
import ResetAllButton from '../../../../scenery-phet/js/buttons/ResetAllButton.js';
import DescriptionDemoConstants from '../../common/DescriptionDemoConstants.js';
import descriptionDemo from '../../descriptionDemo.js';
import DescriptionDemoModel from '../model/DescriptionDemoModel.js';
import optionize from '../../../../phet-core/js/optionize.js';

type SelfOptions = {
 //TODO add options that are specific to DescriptionDemoScreenView here
};

type DescriptionDemoScreenViewOptions = SelfOptions & ScreenViewOptions;

export default class DescriptionDemoScreenView extends ScreenView {

  public constructor( model: DescriptionDemoModel, providedOptions: DescriptionDemoScreenViewOptions ) {

    const options = optionize<DescriptionDemoScreenViewOptions, SelfOptions, ScreenViewOptions>()( {

      //TODO add default values for optional SelfOptions here

      //TODO add default values for optional ScreenViewOptions here
    }, providedOptions );

    super( options );

    const resetAllButton = new ResetAllButton( {
      listener: () => {
        this.interruptSubtreeInput(); // cancel interactions that may be in progress
        model.reset();
        this.reset();
      },
      right: this.layoutBounds.maxX - DescriptionDemoConstants.SCREEN_VIEW_X_MARGIN,
      bottom: this.layoutBounds.maxY - DescriptionDemoConstants.SCREEN_VIEW_Y_MARGIN,
      tandem: options.tandem.createTandem( 'resetAllButton' )
    } );
    this.addChild( resetAllButton );
  }

  /**
   * Resets the view.
   */
  public reset(): void {
    //TODO
  }

  /**
   * Steps the view.
   * @param dt - time step, in seconds
   */
  public override step( dt: number ): void {
    //TODO
  }
}

descriptionDemo.register( 'DescriptionDemoScreenView', DescriptionDemoScreenView );