// Copyright 2024, University of Colorado Boulder

/**
 * TODO Describe this class and its responsibilities.
 *
 * @author Jesse Greenberg (PhET Interactive Simulations)
 */

import descriptionDemo from '../../descriptionDemo.js';
import { PhetioObjectOptions } from '../../../../tandem/js/PhetioObject.js';
import PickRequired from '../../../../phet-core/js/types/PickRequired.js';
import TModel from '../../../../joist/js/TModel.js';

type SelfOptions = {
  //TODO add options that are specific to DescriptionDemoModel here
};

type DescriptionDemoModelOptions = SelfOptions & PickRequired<PhetioObjectOptions, 'tandem'>;

export default class DescriptionDemoModel implements TModel {

  public constructor( providedOptions: DescriptionDemoModelOptions ) {
    //TODO
  }

  /**
   * Resets the model.
   */
  public reset(): void {
    //TODO
  }

  /**
   * Steps the model.
   * @param dt - time step, in seconds
   */
  public step( dt: number ): void {
    //TODO
  }
}

descriptionDemo.register( 'DescriptionDemoModel', DescriptionDemoModel );