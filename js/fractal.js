class Fractal{
    static generateRandomFractal(a, b, stdDeviation , path) {
        var minLenSq = 0.01;
        var factor = 0.1;
        //generate a fractal cure from A to B
        var xDif = a.x - b.x;
        // console.log(`XDiff: ${xDif}`);
        var yDif = a.y - b.y;
        // console.log(`YDiff: ${yDif}`);
        var c = new THREE.Vector2();
        
        // c.x = Math.abs(b.x - a.x) * t;
        // c.y = Math.abs(b.y - a.x) * t;
        if (xDif * xDif + yDif * yDif < minLenSq) {
          path.lineTo(a.x, a.y);
        }
        else {
          stdDeviation *= factor;
          var t = 0;
          for (let i = 0; i < 12; i++) {
            t += Math.random() / 32768.0;
            // console.log(t);
          }
          // console.log(t);
          t = (t - 6) * stdDeviation;
          c.x = 0.5 * (a.x + b.x) - t * (b.y - a.y);
          c.y = 0.5 * (a.y + b.y) + t * (b.x - a.x);
          // path.lineTo(a.x, a.y);
      
      
          console.log(c);
          this.generateRandomFractal(a, c, stdDeviation, path);
          this.generateRandomFractal(c, b, stdDeviation, path);
        }
      }
}