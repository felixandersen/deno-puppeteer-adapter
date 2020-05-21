export const makeGif = ()=> {
  const p = Deno.run({
    cmd: [
      'ffmpeg',
      '-framerate', '3',
      '-i', 'pic%0d.png',
      'output.gif'
    ],
    stdout: 'piped',
  });

  return p.output(); // wait for process to end
};

export const deletePics = async ()=> {
  for await (const file of Deno.readDir("./")) {
    if( file.name.match(/pic\d+\.png/) )
      await Deno.remove(file.name);
  }
};
