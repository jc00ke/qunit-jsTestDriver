This is meant to be a simple example of getting QUnit to run under jsTestDriver
using the [QUnitTestRunnerPlugin](http://github.com/jivesoftware/QUnitTestRunnerPlugin)
by [Jesse Hallett](http://github.com/hallettj).

JsTestDriver.jar is the trunk build. At the moment, 1.2.2 does not work correctly.

Some commands to get this all running:
    git clone git://github.com/jc00ke/qunit-jsTestDriver.git
    cd qunit-jsTestDriver
    git submodule init
    git submodule update
    java -jar JsTestDriver.jar --config jsTestDriver.conf --port 9876 &
Navigate to http://localhost:9876 in your browser
    java -jar JsTestDriver.jar --config jsTestDriver.conf --tests all
    java -jar JsTestDriver.jar --config jsTestDriver.conf --tests all

Note that you may have to run that last line twice. For some reason JsTestDriver may not
pick up the first run & will report:
    Total 0 tests (Passed: 0; Fails: 0; Errors: 0) (0.00 ms)
when in fact it should report:
    Total 1 tests (Passed: 1; Fails: 0; Errors: 0) (0.00 ms)


Thanks to [Julian Birch](http://github.com/JulianBirch) for suggesting the '&' on the server setup.
It's definitely nicer to have it in the background initially, but remember
    fg
to pull it out so you can
    Ctrl+c
to kill the server.
