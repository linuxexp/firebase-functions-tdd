/**
 * Created by raja on 27/01/18.
 */
const sinon = require("sinon");
const functions = require("firebase-functions");
const admin = require("firebase-admin");

const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

describe('Unit testing example DB trigger', function() {

    let adminInitStub,
        stubConfig,
        fakeEvent,
        cloud;

    before(() => {
        adminInitStub = sinon.stub(admin, 'initializeApp');
        stubConfig = sinon.stub(functions, 'config').returns({
            firebase: {
                databaseURL: 'https://not-a-project.firebaseio.com',
                storageBucket: 'not-a-project.appspot.com',
                credential: {
                    getAccessToken: function() {

                    }
                }
            }
        });

        fakeEvent = {
            data: new functions.database.DeltaSnapshot(null, null, null, 'input'),
        };

        cloud = require("../index");
    });

    it('Func. makeUppsercase should "uppercase" any string passed', function() {

        const childParam = 'uppercase';
        const setParam = 'INPUT';
        const refStub = sinon.stub();
        const childStub = sinon.stub();
        const setStub = sinon.stub();

        Object.defineProperty(fakeEvent.data, 'ref', { get: refStub });
        refStub.returns({ parent: { child: childStub}});
        childStub.withArgs(childParam).returns( { set: setStub });
        setStub.withArgs(setParam).returns(true);

        return chai.assert.eventually.equal(cloud.makeUppercase(fakeEvent), true);
    });



});