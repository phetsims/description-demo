// Copyright 2024, University of Colorado Boulder

/**
 * @author Jesse Greenberg (PhET Interactive Simulations)
 */

import descriptionDemo from '../../descriptionDemo.js';
import { PhetioObjectOptions } from '../../../../tandem/js/PhetioObject.js';
import PickRequired from '../../../../phet-core/js/types/PickRequired.js';
import TModel from '../../../../joist/js/TModel.js';

type SelfOptions = {
  // add properties here
};

type DescriptionDemoModelOptions = SelfOptions & PickRequired<PhetioObjectOptions, 'tandem'>;

export default class DescriptionDemoModel implements TModel {

  public constructor( providedOptions: DescriptionDemoModelOptions ) {
    // add code here
  }

  /**
   * Resets the model.
   */
  public reset(): void {
    // add code here
  }

  /**
   * Steps the model.
   * @param dt - time step, in seconds
   */
  public step( dt: number ): void {
    // add code here
  }
}

descriptionDemo.register( 'DescriptionDemoModel', DescriptionDemoModel );