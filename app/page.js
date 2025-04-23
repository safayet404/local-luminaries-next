import Activity from './components/Activity';
import Customization from './components/Customization';
import Destination from './components/Destination';
import Slider from './components/Slider';

export default function Home() {
  return (
    <div>
      <Slider />
      <Customization/>
      <Activity />
      <Destination />
    </div>
  );
}
