package acmcsus.debugjudge;

import acmcsus.debugjudge.model.Competition;
import acmcsus.debugjudge.model.Problem;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.ebean.Ebean;
import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVParser;
import org.apache.commons.csv.CSVRecord;

import java.io.File;
import java.io.IOException;
import java.nio.charset.Charset;
import java.util.List;

public class ProblemSetMain {
    
    public static void main(String[] args) throws IOException {
        if (args.length != 1) {
            System.err.println("1 argument expected. (The file location)");
        }
    
        CSVFormat csvFormat = CSVFormat.DEFAULT.withFirstRecordAsHeader().withEscape('\\');
        CSVParser parser = CSVParser.parse(new File(args[0]), Charset.forName("UTF-8"), csvFormat);
        
        List<CSVRecord> records = parser.getRecords();
        
        if (!Problem.find.all().isEmpty()) {
            System.err.println("Clear out the database first!");
        }
    
        ObjectMapper mapper = new ObjectMapper();
    
//        Competition competition = new Competition();
//        competition.id = 1L;
//        competition.refId = "2017acmdc";
//        competition.name = "ACM Debugging Competition 2017";
//        competition.save();
        
        Competition competition = Competition.find.byId(1L);
        
        for (int idx = 0; idx < records.size(); idx++) {
            CSVRecord record = records.get(idx);
            Problem problem = new Problem();
            
            problem.id = (long) idx + 1;
            problem.orderIndex = (long) idx;
            problem.competition = competition;
            problem.title = record.get("title");
            problem.refId = "2017" + problem.title.toLowerCase().replaceAll("\\s+", "");
            problem.description = record.get("description");
            problem.language = record.get("language");
            
            problem.precode = record.get("precode");
            problem.code = record.get("code");
            problem.postcode = record.get("postcode");
            problem.answer = record.get("answer");
            System.out.println(mapper.writeValueAsString(problem));
            problem.save();
//
//            System.out.printf("INSERT INTO PROBLEMS (id, competition_id, order_index, title, ref_id, description, language, precode, code, postcode, answer)" +
//                    " VALUES (%d, %d, %d, '%s', '%s')");
            
        }
    }
    
}
