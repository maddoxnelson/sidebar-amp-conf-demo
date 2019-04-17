This is a little repo that hopefully demonstrates a restriction of the `amp-sidebar` component that bugs me.

To see what I'm seeing, clone this down and:

`npm install && npm run dev`

Then go to http://localhost:3000.

If you have the amp validator chrome extension, you'll see:

`The parent tag of tag 'amp-sidebar' is 'div', but it can only be 'body'. Debug. Learn more.`

But the docs have an example where `amp-sidebar` _is_ within a `div`:

https://amp.dev/documentation/examples/components/amp-sidebar/

What's more -- this restriction seems like it is outdated, and should be revisited. Is there any practical reason that `amp-sidebar` must be the child of the body? If there isn't a reason, this would increase the range of applications for the component.