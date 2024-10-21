import { Heart, Music, Book, Gamepad2, Globe, Camera } from "lucide-react";
import { myInfo } from "../../data/my_info";

export function AboutTab() {
  return (
    <div className="space-y-10">
      <section className="space-y-5">
        <h2 className="text-4xl font-bold text-zinc-50">About Me</h2>

        <div className="flex items-start gap-6 md:p-8 flex-col md:flex-row">
          <img
            src={myInfo.about_me.image}
            alt="A photo of me"
            className="rounded-lg h-32 object-cover aspect-square"
          />
          <div className="space-y-4">
            <p className="text-xl text-zinc-300">
              Hey there! I'm {myInfo.name} 👋
            </p>
            <p className="text-lg text-zinc-300">{myInfo.about_me.about}</p>
          </div>
        </div>
      </section>

      <section className="space-y-5">
        <h3 className="text-2xl font-semibold text-zinc-100 flex items-center gap-2">
          <Heart className="w-6 h-6 text-red-400" />
          What Makes Me Tick
        </h3>
        <p className="text-zinc-300">{myInfo.about_me.whatMakesMeTick}</p>
      </section>

      <section className="space-y-5">
        <h3 className="text-2xl font-semibold text-zinc-100">
          Beyond the Keyboard
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3">
            <Music className="w-6 h-6 text-zinc-400 shrink-0" />
            <div>
              <h4 className="text-lg font-medium text-zinc-200">Music Lover</h4>
              <p className="text-zinc-400">{myInfo.about_me.music}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Book className="w-6 h-6 text-zinc-400 shrink-0" />
            <div>
              <h4 className="text-lg font-medium text-zinc-200">Avid Reader</h4>
              <p className="text-zinc-400">{myInfo.about_me.book}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Gamepad2 className="w-6 h-6 text-zinc-400 shrink-0" />
            <div>
              <h4 className="text-lg font-medium text-zinc-200">
                Gaming Enthusiast
              </h4>
              <p className="text-zinc-400">
                {myInfo.about_me.game.text}{" "}
                <code>{myInfo.about_me.game.favorite}</code>.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Globe className="w-6 h-6 text-zinc-400 shrink-0" />
            <div>
              <h4 className="text-lg font-medium text-zinc-200">Travel Bug</h4>
              <p className="text-zinc-400">{myInfo.about_me.travel}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-5">
        <h3 className="text-2xl font-semibold text-zinc-100 flex items-center gap-2">
          <Camera className="w-6 h-6 text-zinc-400" />
          Snapshot
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-zinc-100">
              {myInfo.about_me.countriesLivedIn}
            </div>
            <div className="text-sm text-zinc-400">Countries Lived In</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-zinc-100">
              {myInfo.about_me.languagesSpoken}
            </div>
            <div className="text-sm text-zinc-400">Languages Spoken</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-zinc-100">∞</div>
            <div className="text-sm text-zinc-400">Minecraft wisdom</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-zinc-100">
              {myInfo.about_me.linesOfCodeWritten}
            </div>
            <div className="text-sm text-zinc-400">Lines of code written</div>
          </div>
        </div>
      </section>

      <section className="space-y-5">
        <h3 className="text-2xl font-semibold text-zinc-100">Fun Fact</h3>
        <p className="text-zinc-300 text-lg">{myInfo.about_me.fact}</p>
      </section>
    </div>
  );
}
