export const renderSharpness = (sharpness : string) => {
    const sharpnessArray = sharpness.split(',');
    const sharpnessObject = {
      red: 0,
      orange: 0,
      yellow: 0,
      green: 0,
      blue: 0,
      white: 0,
      purple: 0 
    }

    sharpnessArray.forEach((value, index) => {
      switch (index){
        case 0:
          sharpnessObject.red = Number(value);
          break;
        case 1:
          sharpnessObject.orange = Number(value);
          break;
        case 2:
          sharpnessObject.yellow = Number(value);
          break;
        case 3:
          sharpnessObject.green = Number(value);
          break;
        case 4:
          sharpnessObject.blue = Number(value);
          break;
        case 5:
          sharpnessObject.white = Number(value);
          break;
        case 6:
          sharpnessObject.purple = Number(value);
          break;
      }
    })

    //red, orange, yellow, green, blue, white, purple
    return `
      <div class="sharpness">
      ${Object.entries(sharpnessObject).map(([key, value]) => {
        return `
        <div class="block" style="background: ${key}; width: ${value / 5}px">
        </div>`
      }).join('')}
      </div>
    `
  }