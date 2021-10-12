import { Selector } from 'testcafe';
import examplePage from "../model/example.page";

fixture `Getting Started`
    .page `http://devexpress.github.io/testcafe/example`;

test('Check header text', async t => {
    await t
        .typeText(examplePage.nameInput, 'John Smith')
        .click(examplePage.submitButton)

        // Use the assertion to check if the actual header text is equal to the expected one
        .expect(Selector(examplePage.articleHeader).innerText).eql('Thank you, John Smith!');
});
