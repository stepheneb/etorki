load('./spec/support/env.rhino.js')
load('./spec/support/jquery.js')
load('./spec/lib/jspec.js')
load('./spec/lib/jspec.xhr.js')
load('./spec/lib/jspec.jquery.js')
load('./spec/support/junit.xml.js')
load('lib/etorki.js')
load('spec/unit/spec.helper.js')

specResults = JSpec
.exec('spec/unit/spec.js')
.exec('spec/unit/jquery_spec.js')
