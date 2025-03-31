// Copyright 2024-2025, University of Colorado Boulder

/**
 * Defines query parameters that are specific to this simulation.
 * Run with ?log to print query parameters and their values to the browser console at startup.
 *
 * @author Jesse Greenberg (PhET Interactive Simulations)
 */

import logGlobal from '../../../phet-core/js/logGlobal.js';
import { QueryStringMachine } from '../../../query-string-machine/js/QueryStringMachineModule.js';
import descriptionDemo from '../descriptionDemo.js';

const DescriptionDemoQueryParameters = QueryStringMachine.getAll( {
  // This is where you add query parameters for your simulation.
} );

descriptionDemo.register( 'DescriptionDemoQueryParameters', DescriptionDemoQueryParameters );

// Log query parameters
logGlobal( 'phet.chipper.queryParameters' );
logGlobal( 'phet.preloads.phetio.queryParameters' );
logGlobal( 'phet.descriptionDemo.DescriptionDemoQueryParameters' );

export default DescriptionDemoQueryParameters;