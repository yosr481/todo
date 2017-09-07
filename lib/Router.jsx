RouterFlow.route("/", {
    name: "Home",
    action(params){
        renderView(<Home />);
    }
});

function renderView(component){
    reactLayout.render(MainLayout, {
        header: <Header />,
        content: component,
        footer: <Footer />
    });
}