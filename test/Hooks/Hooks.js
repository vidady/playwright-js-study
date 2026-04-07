import { BeforeWorker, BeforeScenario, AfterStep, AfterWorker, AfterScenario, AfterAll, BeforeAll, BeforeStep } from '../fixtures/fixtures';

BeforeWorker(async () => {
    console.log('Before Worker');
    console.log(`Environment loaded: ${process.env.TEST_ENV || 'default'}`);
});

AfterWorker(async () => {
    console.log('After Worker');
});

BeforeAll(async () => {
    console.log('Before All');
});

AfterAll(async () => {
    console.log('After All');
});

BeforeScenario(async () => {
    console.log('Before Scenario');
});

AfterScenario(async () => {
    console.log('After Scenario');
});

BeforeStep(async () => {
    console.log('Before Step');
}); 

AfterStep(async () => {
    console.log('After Step');
});

