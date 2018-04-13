import document from "document";
import { battery } from "power";
import * as util from "../common/utils";

// Get a handle on the <text> element.
const batteryLabel = document.getElementById("batteryLabel");

// Function that get the color for the battery level label based on the current charge level.
function chargeLevelToColor(value) {
  let percent = Math.round(value);
  let color = 'white';
  if (percent <= 10) {
    color = 'fb-red';
  } else if (percent <= 25) {
    color = 'fb-peach';
  } else if (percent <= 90) {
    color = 'fb-mint';
  } else {
    color = 'fb-cyan';
  }
  return color;
}

export function update() {
  // Update the <text> element with the battery level.
  batteryLabel.style.fill = chargeLevelToColor(battery.chargeLevel);
  batteryLabel.text = util.monoDigits(battery.chargeLevel) + '%';
}