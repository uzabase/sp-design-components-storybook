# getting started

さいしょに一回やる

```sh
$ npm i
```

毎回、起動時にやる

```sh
$ npm run storybook
```

そしたら、自動的にChromeで `localhost:6006` が開く（開かなければ `http://loccalhost:6006` を開いてください）

# ストーリーを追加する

## ストーリーファイルを作る

ファイル `stories/Hogehoge.stories.ts` を作る

```tsx
export default {
  title: "Hogehoge", // コンポーネントの表示名（この名前でグループ化される）
  tags: ['autodocs'], // いい感じのドキュメントが生成されるようになるので、書いておくとよい
}

// グループ内に表示されるコンポーネントのバリエーション
export const Default = () => {
  // 例えば、sp-buttonだったらデフォルトはこれ
  return `<sp-button label="hoge"></sp-button>`
}

export const Disabled = () => {
  // 非活性な場合はこれ
  return `<sp-button label="hoge" disabled></sp-button>`
}

// まずはこれだけでも、十分にストーリーを作れると思います
// Button.stories.ts を参考に色々変数を変えられるようにしてもよし
```
