
load('./spec/support/env.rhino.js')
Envjs("./comments.html");
load('./spec/support/jquery.js')
load('./spec/lib/jspec.js')
load('./spec/lib/jspec.xhr.js')
load('./spec/lib/jspec.jquery.js')
// load('lib/etorki.js')
// load('spec/unit/spec.helper.js')

JSpec
.exec('spec/unit/true_spec.js')
.run({ reporter: JSpec.reporters.Terminal, fixturePath: 'spec/fixtures' })
.report()