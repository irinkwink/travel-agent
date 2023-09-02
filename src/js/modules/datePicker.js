import { easepick, TimePlugin } from '@easepick/bundle';

function datePicker() {
  const picker = new easepick.create({
    element: "#datePicker",
    css: [
        "https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css"
    ],
    zIndex: 10,
    plugins: [
        TimePlugin
    ]
  })
}

export default datePicker;