const { Page, View } = require('@react-pdf/renderer');

let num = 1;

const templateJSX = (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <View style={styles.head}>
                    <Text style={styles.title}>Exam question sheet</Text>
                    <View style={styles.details}>
                        <View style={styles.leftColumn}>
                            <Text style={styles.type}>Course ID:</Text>
                            <Text style={styles.data}>{data.internalRef}</Text>
                            <Text style={styles.type}>Course title:</Text>
                            <Text style={styles.data}>{data.title}</Text>
                            <Text style={styles.type}>Location:</Text>
                            <Text style={styles.data}>{data.location}</Text>
                        </View>
                        <View style={styles.rightColumn}>
                            <Text style={styles.type}>Exam phase:</Text>
                            <Text style={styles.data}>{data.phase}</Text>
                            <Text style={styles.type}>Number of questions:</Text>
                            <Text style={styles.data}>{data.questionsQty}</Text>
                            <Text style={styles.type}>Time allowed:</Text>
                            <Text style={styles.data}>{data.time}</Text>
                        </View>
                        <Text style={styles.note}>
                            <p>
                                Note:You can mark on the question sheet but it will not be considered during the marking. After the exam is completed,
                                you shall return it to the invigilator. You are not allowed to take pictures of it, or any other means of copying the questions.
                            </p>
                        </Text>
                    </View>
                </View>
            </View>

            <View style={styles.divider}></View>

            <View style={styles.content}>
                {content.map((x) => (
                    <View style={styles.group}>
                        {x.map((y) => (
                            <View style={styles.question}>
                                <Text style={styles.ask}>
                                    {num++}. {y.question}
                                </Text>
                                <Text style={styles.answer}>A. {y.ansA}</Text>
                                <Text style={styles.answer}>B. {y.ansB}</Text>
                                <Text style={styles.answer}>C. {y.ansC}</Text>
                            </View>
                        ))}
                    </View>
                ))}
            </View>
            <View style={styles.footer}>
                <Text> Page No</Text>
            </View>
        </Page>
    </Document>
);

const examJSX = (
    <Document>
        <Page size="A4"></Page>
    </Document>
);

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#FFF',
    },
    section: {
        margin: 10,
        padding: 10,
        // backgroundColor: 'blue',
    },
    heading: {
        fontSize: 24,
        fontWeight: 600,
        color: '#131925',
        marginBottom: 8,
    },
    statement: {
        fontSize: 20,
        color: '#131925',
        lineHeight: 1.4,
        marginBottom: 4,
    },
    divider: {
        width: '100%',
        height: 1,
        backgroundColor: '#999999',
        margin: '24px 0 24px 0',
    },
    paragraph: {
        fontSize: 12,
        color: '#212935',
        lineHeight: 1.67,
    },
    columnParent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    columnStart: {
        flex: 1,
    },
    columnEnd: {
        flex: 1,
        alignItems: 'flex-end',
    },
    title: {
        fontSize: '20px',
        textAlign: 'center'
    }
});
