const tactor = canvas.tokens.get(args[0].tokenId);
const templateObject =
  canvas.templates.placeables[canvas.templates.placeables.length - 1];
new Sequence()
  .effect()
  .file("jb2a.fire_bolt.green02")
  .atLocation(tactor)
  .stretchTo({ x: templateObject.data.x, y: templateObject.data.y })
  .waitUntilFinished(-750)
  .effect()
  .file("jb2a.fog_cloud.2.Green")
  .attachTo(templateObject)
  .scaleToObject(1.1)
  .opacity(0.5)
  .persist()
  .scaleIn(0.1, 200, { ease: "easeOutQuint", delay: 100 })
  .fadeOut(1000, { ease: "easeInQuad" })
  .play();

// make the template go away
await template.document.delete()
