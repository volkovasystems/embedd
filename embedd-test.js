
const assert = require( "assert" );
const embedd = require( "./embedd.js" );
const idntty = require( "idntty" );

let data = { };
let identity = idntty( data ).toString( );

assert.equal( embedd( data, `${ identity }:test` ), true, "should be true" );

console.log( "ok" );
