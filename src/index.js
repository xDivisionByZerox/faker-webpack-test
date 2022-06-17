// @ts-check
import { faker } from '@faker-js/faker';

function component() {
  const element = document.createElement('div');

  element.innerHTML = `Hello, ${faker.name.findName()}`;

  return element;
}

const c = component();
document.body.appendChild(c);

setInterval(() => {
  document.title = faker.internet.domainName();
  c.innerHTML = `Hello, ${faker.name.findName()}`;
}, 750);