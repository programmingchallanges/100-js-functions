import { applyTheme } from "./utils/theme.utils.js";
import { getRoute } from "./router/router.js";
import { getState, setState } from "./utils/state.utils.js";
import { renderLayout } from "./ui/layout.js";
import { renderProblemView } from "./ui/problem-view.js";
import { renderProblemList } from "./ui/problem-list.js";

export async function renderApp() {
  const root = document.getElementById("root");

  applyTheme();

  const routeId = getRoute();
  const state = getState();

  if (routeId) {
    setState({ currentProblemId: routeId });
  }

  root.innerHTML = renderLayout();

  const content = document.getElementById("content");

  if (state.currentProblemId) {
    await renderProblemView(content, state.currentProblemId);
  } else {
    renderProblemList(content);
  }
}
