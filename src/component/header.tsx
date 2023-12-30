import Head from "next/head";

const Header = ({ author, avatar }: { author: string; avatar: string }) => {
  const inner = `
    tailwind.config = {
        theme: {
            extend: {
                colors: {
                    primary: '#ec4899',
                }
            },
            colors: {
                primary: '#ec4899',
            }
        }
    }
    `;
  const changeColor = `
    !(function () {
        try {
            var d = document.documentElement,
                c = d.classList;
            c.remove("light", "dark");
            var e = localStorage.getItem("theme");
            if ("system" === e || (!e && true)) {
                var t = "(prefers-color-scheme: dark)",
                    m = window.matchMedia(t);
                if (m.media !== t || m.matches) {
                    d.style.colorScheme = "dark";
                    c.add("dark");
                } else {
                    d.style.colorScheme = "light";
                    c.add("light");
                }
            } else if (e) {
                c.add(e || "");
            }
            if (e === "light" || e === "dark") d.style.colorScheme = e;
        } catch (e) { }
    })();
    `;
  return (
    <>
      <script src="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp"></script>
      <script dangerouslySetInnerHTML={{ __html: inner }}></script>
      <script dangerouslySetInnerHTML={{ __html: changeColor }}></script>
    </>
  );
};

export default Header;
