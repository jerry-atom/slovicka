import { Settings } from "./settings.js";

const KEY = "settings";

export class SettingsRepository {

  public load(): Settings {
    try {
      return Settings.fromJSON(JSON.parse(String(window.localStorage.getItem(KEY))));
    } catch (e) {
      console.error(e);
      const settings = this.create();
      this.save(settings);
      return settings;
    }
  }

  public create(): Settings {
    return new Settings(
      10,
      3,
      "dark",
    );
  }

  public save(settings: Settings): void {
    window.localStorage.setItem(KEY, JSON.stringify(settings));
  }
}
