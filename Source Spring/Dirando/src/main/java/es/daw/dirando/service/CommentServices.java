package es.daw.dirando.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import es.daw.dirando.model.Comment;
import es.daw.dirando.model.Producto;

import es.daw.dirando.repository.CommentRepository;
import es.daw.dirando.repository.ProductoRepository;
import es.daw.dirando.repository.UsuarioRepository;

@Service
public class CommentServices {

	@Autowired
	private UsuarioRepository usuarioRepository;
	
	@Autowired
	private ProductoRepository productoRepository;
		
	@Autowired
	private CommentRepository commentRepository;
	
		//Add comment into a product
		public void addCommentIntoProduct (String nameHttp, long id, String comment, String rating){
			if (Integer.parseInt(rating)==3){
	    		Comment co = new Comment (usuarioRepository.findUserByName(nameHttp).getName(), comment, "The Best!");
	    		productoRepository.findProductoById(id).setComments(co);
	    		productoRepository.findProductoById(id).incrementTheBest();
	    	}else if(Integer.parseInt(rating)==2){
	    		Comment co = new Comment (usuarioRepository.findUserByName(nameHttp).getName(), comment, "Must Improve!");
	    		productoRepository.findProductoById(id).setComments(co);
	    		productoRepository.findProductoById(id).incrementMustImprove();
	    	}else if(Integer.parseInt(rating)==1){
	    		Comment co = new Comment (usuarioRepository.findUserByName(nameHttp).getName(), comment, "Bad!");
	    		productoRepository.findProductoById(id).setComments(co);
	    		productoRepository.findProductoById(id).incrementBad();
	    	}else{
	    		Comment co = new Comment (usuarioRepository.findUserByName(nameHttp).getName(), comment, null);
	    		productoRepository.findProductoById(id).setComments(co);
	    	}
			/*Update the new data product*/
			saveProduct(productoRepository.findProductoById(id));
		}
		
		public void saveProduct(Producto pro){
			productoRepository.saveAndFlush(pro);
		}
		
		
		/*Count items numbers about comment*/
		public long getCommentsNumber(){
			return commentRepository.count();	
		}
				
		//Return all comments about specific product
		public List<Comment> getComments(String idProduct){
			return productoRepository.findProductoById(Long.parseLong(idProduct)).getComments();
		}
		
		public List<Comment> getAllComments(){
			return commentRepository.findAll();
		}
		
		public void deleteComment(long id){
			commentRepository.delete(id);
		}
		
				
}