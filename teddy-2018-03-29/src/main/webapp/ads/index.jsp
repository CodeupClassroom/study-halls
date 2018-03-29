<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>

<h1>Here's all the ads</h1>

<c:forEach items="${ads}" var="ad">
    <div class="ad">
        <h2>

            <form action="/ads/show" method="get">
                <input type="hidden" name="id" value="${ad.id}" />
                <button type="submit">${ad.title}</button>
            </form>

        </h2>
        <p>${ad.description}</p>
    </div>
</c:forEach>

</body>
</html>
